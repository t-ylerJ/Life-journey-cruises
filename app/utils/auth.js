import { supabaseClient } from '~/utils/supabase'

export const login = async (formData) => {
  const { data: signInData, error: signInError } =
    await supabaseClient.auth.signInWithPassword(formData)
  console.log(signInData, signInError)
  if (signInError) {
    console.log(signInError)
  } else {
    console.log(signInData)
    if (signInData?.session) {
      await supabaseClient.auth.signOut()
      const { data: otpData, error: signInOtpError } =
        await supabaseClient.auth.signInWithOtp({
          phone: signInData.user.phone,
        })
      if (signInOtpError) {
        console.log(signInOtpError)
      } else {
        console.log(otpData)
        return { verify: true, phone: signInData.user.phone }
      }
    }
  }
  return null
}

export const loginVerify = async (formData) => {
  console.log(formData)
  const { data: verifyResult, error: verifyError } =
    await supabaseClient.auth.verifyOtp({
      phone: formData.phone,
      token: formData.token,
      type: 'sms',
    })
  if (verifyError) {
    console.log(verifyError)
  } else {
    console.log(verifyResult)
    // return redirect(formData.redirectURL)
    return new Response(null, {
      status: 303,
      headers: {
        Location: formData.redirectURL,
      },
    })
    // return null
  }
  return null
}

export const signup = async (formData) => {
  const { data: emailSignup, error: signUpError } =
    await supabaseClient.auth.signUp({
      email: formData.email,
      password: formData.password,
    })
  if (signUpError) {
    console.log(signUpError)
  } else {
    console.log(emailSignup)
    const { data: phoneSignup, error: phoneError } =
      await supabaseClient.auth.updateUser({
        phone: formData.phone,
      })
    if (phoneError) {
      console.log(phoneError)
    } else {
      console.log(phoneSignup)
      await supabaseClient.auth.signOut()
      return { verify: true, phone: formData.phone }
    }
  }
  return null
}

export const signupVerify = async (formData) => {
  const { verifyResult, verifyError } = await supabaseClient.auth.verifyOtp({
    phone: formData.phone,
    token: formData.token,
    type: 'phone_change',
  })
  if (verifyError) {
    console.log(verifyError)
  } else {
    console.log(verifyResult)
    return new Response(null, {
      status: 303,
      headers: {
        Location: formData.redirectURL,
      },
    })
  }
}
