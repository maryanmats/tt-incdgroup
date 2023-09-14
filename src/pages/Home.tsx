import React, { useContext, useEffect, useRef, useState } from "react";
import Layout from "../components/layouts/Layout";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchRicksCharacter, fetchRicksEpisodes, fetchRicksLocation } from "../store/homeSlice";
import CharacterItem from "../components/HomeItems/CharacterItem";
import Skeleton from "react-loading-skeleton";
import Button from "../components/Button/Button";
import Select from "../components/Select/Select";
import { SELECT_OPTIONS } from "../constants/filter";
import Input from "../components/Input/Input";
import { useClickOutside } from "../hooks/use-click-outside";
import { useLocation, useSearchParams } from "react-router-dom";
import LocationItem from "../components/HomeItems/LocationItem";
import EpisodesItem from "../components/HomeItems/EpisodesItem";
import Pagination from "../components/Pagination/Pagination";
import Fab from "../components/Fab/Fab";
import { DrawerContext } from "../context/DrawerContext";

export default function Home() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.home);

  const drawerContext = useContext(DrawerContext);

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const [isOpen, setIsOpen] = useState(false);
  const [isShowFilters, setIsShowFilters] = useState(false);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");

  const [nameLocation, setNameLocation] = useState("");
  const [typeLocation, setTypeLocation] = useState("");
  const [dimension, setDimension] = useState("");

  const [nameEpisodes, setNameEpisodes] = useState("");
  const [episodes, setEpisodes] = useState("");

  const [selectedItem, setSelectedItem] = useState("Character");

  const filtersRef = useRef<HTMLDivElement>(null);

  const handleCloseSelect = () => {
    setIsOpen(false);
  };

  const fetchData = (fetchBy: "Character" | "Location" | "Episodes", filter: string) => {
    switch (fetchBy) {
      case "Character":
        dispatch(fetchRicksCharacter(filter));
        break;
      case "Location":
        dispatch(fetchRicksLocation(filter));
        break;

      case "Episodes":
        dispatch(fetchRicksEpisodes(filter));
        break;
      default:
        dispatch(fetchRicksCharacter(filter));
        break;
    }
    const filtersLocalStorage = filter.slice(1);
    localStorage.setItem(
      "@testHistory",
      localStorage.getItem("@testHistory")
        ? `${localStorage.getItem("@testHistory")}|${filtersLocalStorage}`
        : filtersLocalStorage,
    );
  };

  useClickOutside({
    ref: filtersRef,
    callback: handleCloseSelect,
    active: isOpen,
  });

  useEffect(() => {
    if (searchParams.get("name")) {
      setName(searchParams.get("name") || "");
      setNameLocation(searchParams.get("name") || "");
      setNameEpisodes(searchParams.get("name") || "");
    }
    if (
      searchParams.get("status") &&
      (searchParams.get("status")?.toLowerCase() === "alive" ||
        searchParams.get("status")?.toLowerCase() === "dead" ||
        searchParams.get("status")?.toLowerCase() === "unknown")
    ) {
      setStatus(searchParams.get("status") || "");
    }
    if (searchParams.get("species")) {
      setSpecies(searchParams.get("species") || "");
    }
    if (searchParams.get("type")) {
      setType(searchParams.get("type") || "");
      setTypeLocation(searchParams.get("type") || "");
    }
    if (
      searchParams.get("gender") &&
      (searchParams.get("gender")?.toLowerCase() === "female" ||
        searchParams.get("gender")?.toLowerCase() === "male" ||
        searchParams.get("gender")?.toLowerCase() === "genderless" ||
        searchParams.get("gender")?.toLowerCase() === "unknown")
    ) {
      setGender(searchParams.get("gender") || "");
    }

    if (searchParams.get("dimension")) {
      setDimension(searchParams.get("dimension") || "");
    }
    if (searchParams.get("episodes")) {
      setEpisodes(searchParams.get("episodes") || "");
    }

    if (searchParams.get("filterBy")) {
      setSelectedItem(searchParams.get("filterBy") || "Character");
      fetchData((searchParams.get("filterBy") as "Character") || "Character", location.search);
    } else {
      fetchData("Character", location.search);
    }
    if (
      searchParams.get("filterBy") ||
      searchParams.get("name") ||
      searchParams.get("filterBy") ||
      searchParams.get("status") ||
      searchParams.get("species") ||
      searchParams.get("type") ||
      searchParams.get("gender") ||
      searchParams.get("dimension") ||
      searchParams.get("episodes")
    )
      setIsShowFilters(true);
  }, [
    searchParams.get("name"),
    searchParams.get("filterBy"),
    searchParams.get("status"),
    searchParams.get("species"),
    searchParams.get("type"),
    searchParams.get("gender"),
    searchParams.get("dimension"),
    searchParams.get("episode"),
    searchParams.get("page"),
  ]);

  const clearFilters = (filterBy: string) => {
    setName("");
    setStatus("");
    setSpecies("");
    setType("");
    setGender("");
    setNameLocation("");
    setTypeLocation("");
    setDimension("");
    setNameEpisodes("");
    setEpisodes("");
    setSearchParams({ filterBy });
  };

  const handleChangeFilter = (value: string) => {
    clearFilters(value);
  };

  const handleAddFilters = () => {
    let queryParams: any = {};
    queryParams.filterBy = selectedItem;

    queryParams.name = name;
    queryParams.status = status;
    queryParams.species = species;
    queryParams.type = type;
    queryParams.gender = gender;

    let locationParams: any = {};
    locationParams.name = nameLocation;
    locationParams.type = typeLocation;
    locationParams.dimension = dimension;

    let episodesParams: any = {};

    episodesParams.name = nameEpisodes;
    episodesParams.episode = episodes;

    if (selectedItem === "Character") {
      setSearchParams({
        ...queryParams,
        filterBy: selectedItem,
      });
    }
    if (selectedItem === "Location") {
      setSearchParams({
        ...locationParams,
        filterBy: selectedItem,
      });
    }
    if (selectedItem === "Episodes") {
      setSearchParams({
        ...episodesParams,
        filterBy: selectedItem,
      });
    }
  };

  const handleRemoveFilters = () => {
    clearFilters((searchParams.get("filterBy") as "Character") || "Character");
    setIsShowFilters(false);
  };

  const handleChangePage = (page: number) => {
    setSearchParams((prev) => {
      prev.set("page", `${page}`);
      return prev;
    });
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Layout>
        <div className="home__filter">
          <div>
            <Button
              title={isShowFilters ? "REMOVE FILTER" : "FILTER"}
              onClick={() => (isShowFilters ? handleRemoveFilters() : setIsShowFilters(true))}
            />
          </div>
          <div className="home__filter_second">
            {isShowFilters && (
              <>
                <Select options={SELECT_OPTIONS} value={selectedItem} onChange={handleChangeFilter} />

                {selectedItem === "Character" && (
                  <div ref={filtersRef} className="home__filters">
                    <Input
                      style={{ borderRadius: `${isOpen ? "4px 4px 0 0" : "4px"}` }}
                      name="name"
                      placeholder="Add Name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      onFocus={() => setIsOpen(true)}
                    />
                    {isOpen && (
                      <div className="home__filters_body">
                        <Input
                          style={{ borderTop: "1px solid #272B33", borderRadius: "0" }}
                          name="status"
                          placeholder="Alive/Dead/Unknown"
                          onChange={(e) => setStatus(e.target.value)}
                          value={status}
                          onFocus={() => setIsOpen(true)}
                        />
                        <Input
                          style={{ borderTop: "1px solid #272B33", borderRadius: "0" }}
                          name="species"
                          placeholder="Add Species"
                          onChange={(e) => setSpecies(e.target.value)}
                          value={species}
                          onFocus={() => setIsOpen(true)}
                        />
                        <Input
                          style={{ borderTop: "1px solid #272B33", borderRadius: "0" }}
                          name="type"
                          placeholder="Add Type"
                          onChange={(e) => setType(e.target.value)}
                          value={type}
                          onFocus={() => setIsOpen(true)}
                        />
                        <Input
                          style={{ borderTop: "1px solid #272B33", borderRadius: "0 0 4px 4px" }}
                          name="gender"
                          placeholder="Female/Male/Genderless/Unknown"
                          onChange={(e) => setGender(e.target.value)}
                          value={gender}
                          onFocus={() => setIsOpen(true)}
                        />
                      </div>
                    )}
                  </div>
                )}
                {selectedItem === "Location" && (
                  <div ref={filtersRef} className="home__filters">
                    <Input
                      style={{ borderRadius: `${isOpen ? "4px 4px 0 0" : "4px"}` }}
                      name="nameLocation"
                      placeholder="Add Name"
                      onChange={(e) => setNameLocation(e.target.value)}
                      value={nameLocation}
                      onFocus={() => setIsOpen(true)}
                    />
                    {isOpen && (
                      <div className="home__filters_body">
                        <Input
                          style={{ borderTop: "1px solid #272B33", borderRadius: "0" }}
                          name="typeLocation"
                          placeholder="Add Type"
                          onChange={(e) => setTypeLocation(e.target.value)}
                          value={typeLocation}
                          onFocus={() => setIsOpen(true)}
                        />
                        <Input
                          style={{ borderTop: "1px solid #272B33", borderRadius: "0 0 4px 4px" }}
                          name="species"
                          placeholder="Add Dimension"
                          onChange={(e) => setDimension(e.target.value)}
                          value={dimension}
                          onFocus={() => setIsOpen(true)}
                        />
                      </div>
                    )}
                  </div>
                )}
                {selectedItem === "Episodes" && (
                  <div ref={filtersRef} className="home__filters">
                    <Input
                      style={{ borderRadius: `${isOpen ? "4px 4px 0 0" : "4px"}` }}
                      name="nameEpisodes"
                      placeholder="Add Name"
                      onChange={(e) => setNameEpisodes(e.target.value)}
                      value={nameEpisodes}
                      onFocus={() => setIsOpen(true)}
                    />
                    {isOpen && (
                      <div className="home__filters_body">
                        <Input
                          style={{ borderTop: "1px solid #272B33", borderRadius: "0 0 4px 4px" }}
                          name="episodes"
                          placeholder="Add Episode"
                          onChange={(e) => setEpisodes(e.target.value)}
                          value={episodes}
                          onFocus={() => setIsOpen(true)}
                        />
                      </div>
                    )}
                  </div>
                )}
                <Button title="FIND" onClick={handleAddFilters} />
              </>
            )}
          </div>
        </div>
        <div className="home__items">
          {data.loading &&
            Array.from({ length: 8 })
              .fill("_")
              .map((item, index) => <Skeleton count={1} height={220} width={"100%"} borderRadius={5} key={index} />)}
          {data.currentFilter === "character" &&
            data.data.characters.length > 0 &&
            data.data.characters.map((item) => {
              return <CharacterItem key={item.id} data={item} />;
            })}
          {data.currentFilter === "location" &&
            data.data.locations.length > 0 &&
            data.data.locations.map((item) => {
              return <LocationItem key={item.id} data={item} />;
            })}
          {data.currentFilter === "episode" &&
            data.data.episodes.length > 0 &&
            data.data.episodes.map((item) => {
              return <EpisodesItem key={item.id} data={item} />;
            })}
        </div>
        {data.currentFilter === "character" && data.data.characters.length === 0 && (
          <p className="home__empty">Oops... Data not found</p>
        )}
        {data.currentFilter === "location" && data.data.locations.length === 0 && (
          <p className="home__empty">Oops... Data not found</p>
        )}
        {data.currentFilter === "episode" && data.data.episodes.length === 0 && (
          <p className="home__empty">Oops... Data not found</p>
        )}
        <div className="home__pagination">
          {
            <Pagination
              currentPage={+(searchParams.get("page") || 1)}
              totalPages={data.data.info?.pages || 1}
              onPageChange={handleChangePage}
            />
          }
        </div>
        <Fab
          data={
            data.data.characters.length > 0
              ? data.data.characters
              : data.data.locations.length > 0
              ? data.data.locations
              : data.data.episodes
          }
          isMain
        />
      </Layout>
    </>
  );
}
