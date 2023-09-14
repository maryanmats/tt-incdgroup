import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchCharacter } from "../store/characterSlice";
import Fab from "../components/Fab/Fab";
import Skeleton from "react-loading-skeleton";
import { fetchLocation } from "../store/locationSlice";

export default function LocationDetails() {
  const { id } = useParams();
  const data = useAppSelector((state) => state.location);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) dispatch(fetchLocation(+id || 0));
  }, [id]);

  return (
    <Layout>
      <div className="character">
        {data.loading && <Skeleton count={4} width={"100%"} borderRadius={"4px"} height={"30px"} />}
        {!data.loading && (
          <div className="character__body">
            <h3>{data.data.name}</h3>
            <div className="character__flex">
              <span>{data.data.dimension}</span>
            </div>
            <div className="character__item">
              <h4>Residents:</h4>
              <p>{data.data.residents.join(",")}</p>
            </div>
            <div className="character__item">
              <h4>Type:</h4>
              <p>{data.data.type}</p>
            </div>
          </div>
        )}
      </div>
      <Fab isMain={false} />
    </Layout>
  );
}
