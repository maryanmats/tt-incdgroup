import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchCharacter } from "../store/characterSlice";
import Fab from "../components/Fab/Fab";
import Skeleton from "react-loading-skeleton";

export default function CharacterDetail() {
  const [imageLoading, setImageLoading] = useState(true);
  const { id } = useParams();
  const data = useAppSelector((state) => state.character);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) dispatch(fetchCharacter(+id || 0));
  }, [id]);

  return (
    <Layout>
      <div className="character">
        {data.loading && <Skeleton width={300} height={303} />}
        {!data.loading && (
          <div className="character__image">
            {imageLoading && <Skeleton width={"100%"} height={"100%"} />}
            <img src={data.data.image} alt="image of character" onLoad={() => setImageLoading(false)} />
          </div>
        )}
        {data.loading && <Skeleton count={4} width={"100%"} borderRadius={"4px"} height={"30px"} />}
        {!data.loading && (
          <div className="character__body">
            <h3>{data.data.name}</h3>
            <div className="character__flex">
              <span>
                {data.data.status} - {data.data.type}
              </span>
            </div>
            <div className="character__item">
              <h4>Last known location:</h4>
              <p>{data.data.location.name}</p>
            </div>
            <div className="character__item">
              <h4>First seen in:</h4>
              <p>{data.data.origin.name}</p>
            </div>
          </div>
        )}
      </div>
      <Fab isMain={false} />
    </Layout>
  );
}
