import { useState } from "react";
import { prisma } from "@/lib/prisma";
const getTrips = async () => {
  const trips = await prisma.trip.findMany({});

  return trips;
};

const Trips = async () => {
  const data = await fetch("");

  console.log({ data });
  return <h1>Trips</h1>;
};

export default Trips;
