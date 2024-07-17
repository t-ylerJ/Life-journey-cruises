import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useParams } from "react-router-dom";
import Map from "~/components/Map";
import PortDetails from "~/components/PortDetails";
import Ports from "~/components/Ports";
import sql from "~/utils/sql";

export const loader = async ({ request, params }) => {
  try {
    console.log("params:", params);
    const voyageId = params.voyage;
    console.log("voyageId:", voyageId);
    const mapData = await sql`
      SELECT
        m.id,
        m.center_lat,
        m.center_long,
        m.zoom,
        jsonb_agg(DISTINCT jsonb_build_object('id', p.id, 'lat', p.lat, 'long', p.long, 'name', p.name)) as port
      FROM
        maps m
      JOIN
        voyage_ports vp ON m.voyage_id = vp.voyage_id
      JOIN
        ports p ON vp.port_id = p.id
      WHERE
        m.voyage_id = ${voyageId} -- Filter by the dynamic voyageId
      GROUP BY
        m.id;
    `;
    console.log("data:", mapData);
    return json({ mapData, mapboxAccessToken: process.env.MAPBOX_ACCESS_TOKEN });
  } catch (error) {
    console.error("Error in loader:", error);
    throw json({error:error.message}, {status:500});
  }
};

const Voyages = () => {
  const { mapData, error, mapboxAccessToken } = useLoaderData();

  if (error) {
    return <div>Error: {error.message}</div>; // Handle error
  }

  return (
    <>
      <Ports />
      Map should be between here
      {mapData && <Map mapData={mapData[0]} mapboxAccessToken={mapboxAccessToken} /> /* Pass data as prop */}
       and here
      <PortDetails />
    </>
  );
};

export default Voyages;