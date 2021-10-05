import { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { FaSearch } from "react-icons/fa";
import Card from "../component/Card";
import ProductPage from "../component/store/ProductPage";

//STYLED COMPONENTS
export const StoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`;

export const StoreContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const SearchbarContainer = styled.form`
  display: flex;
  align-items: center;
  height: 30px;
`;

export const Searchbar = styled.input`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  height: 100%;
  width: 20%;
  padding: 0 10px;
  border: 1px solid black;
  border-right: none;
`;

export const SearchButton = styled.button`
  background: none;
  height: 100%;
  width: auto;
  border: none;
`;

export const SearchbarIcon = styled(FaSearch)`
  fill: white;
  background: black;
  height: 100%;
  width: auto;
  padding: 5px;
  cursor: pointer;
  border: 1px solid black;

  &:hover {
    fill: black;
    background: none;
  }
`;

export const StoreGridContainer = styled.div`
  display: flex;
  padding: 50px 0;
`;

export const StoreGrid = styled.div`
  display: grid;
  justify-content: space-between;
  width: 100%;
  grid-template-columns: repeat(4, 24%);
  grid-template-rows: repeat(auto, minmax(300px, auto));
  grid-gap: 10px;
  grid-column-gap: 10px;
`;

export const ClickableCard = styled(Link)`
  border: 1px solid white;

  &:hover {
    border: 1px solid black;
  }
`;

export const PageNumberContainer = styled.div`
  align-self: center;
`;

export const PageNumbers = styled(Link)`
  margin: 0 5px;
  color: ${(props) => {
    if (props.children === 1 && props.path === "/store") {
      return "grey";
    } else {
      return props.path.includes(props.children) ? "grey" : "black";
    }
  }};
`;

//MAIN RENDER
const Store = () => {
  //LOGIC
  const [fetchingData, setFetchingData] = useState(true);
  const [pages, setPages] = useState(1);
  const [productData, setProductData] = useState([]);
  const searchDataRef = useRef();
  const location = useLocation();
  const [isStorePage, setIsStorePage] = useState(true);
  const storePathname = useRef(location.pathname);
  const productDataRef = useRef(productData);
  const [itemData, setItemData] = useState();

  useEffect(() => {
    const fetchedData = async () => {
      const res = await fetch(
        "https://products-c9747-default-rtdb.firebaseio.com/products.json"
      );
      const data = res.json();
      return data;
    };

    const transformData = async () => {
      const data = await fetchedData();

      const products = [];
      let cards = 0;

      for (const key in data) {
        const product = {
          id: key,
          ...data[key],
        };

        cards = cards + 1;

        products.push(product);
      }

      var totalPages = 1;
      var totalItemsEachPage = 20;

      if (cards <= 10) {
        setPages(1);
      } else {
        totalPages = Math.ceil(cards / totalItemsEachPage);
        setPages(totalPages);
      }

      const pageDataContainer = [];

      for (let i = 1; i <= totalPages; i++) {
        const pageDataSubArray = [];

        for (let j = 0; j < totalItemsEachPage; j++) {
          let item = products.shift();

          if (item === undefined) {
            break;
          }

          pageDataSubArray.push(item);
        }

        pageDataContainer.push(pageDataSubArray);
      }

      setProductData(pageDataContainer);
      setFetchingData(false);
    };

    transformData();
  }, []);

  useEffect(() => {
    storePathname.current = location.pathname;
    setIsStorePage(true);

    if (location.pathname === "/store") {
      setIsStorePage(true);
    } else {
      if (isNaN(storePathname.current[7])) {
        setIsStorePage(false);

        function filteringArray() {
          const productArray = [];
          productDataRef.current = productData;

          for (let i = 0; i < productDataRef.current.length; i++) {
            for (let j = 0; j < productDataRef.current[i].length; j++) {
              let name = productDataRef.current[i][j].name.toLowerCase();
              let nameArray = [];

              for (let letter = 0; letter < name.length; letter++) {
                if (name[letter] === " ") {
                  nameArray.push("-");
                } else {
                  nameArray.push(name[letter]);
                }
              }

              name = nameArray.join("");

              if (location.pathname === `/store/${name}`) {
                productArray.push(productDataRef.current[i][j]);
              }
            }
          }
          setItemData(productArray[0]);
        }

        filteringArray();
      } else {
        setIsStorePage(true);
      }
    }
  }, [location.pathname, productData]);

  if (fetchingData) {
    return <div></div>;
  }

  function searchSomething(e) {
    e.preventDefault();
    let searchData = searchDataRef.current.value;
    if (searchData) {
      console.log(searchData);
    }
  }

  const pageNumbersElements = [];

  for (let i = 1; i <= pages; i++) {
    pageNumbersElements.push(
      <PageNumbers
        path={location.pathname}
        key={i}
        to={() => (i === 1 ? `/store` : `/store/${i}`)}
      >
        {i}
      </PageNumbers>
    );
  }

  //RETURN
  return (
    <StoreContainer>
      <StoreContent>
        {isStorePage ? (
          <>
            <SearchbarContainer action="/" onSubmit={searchSomething}>
              <Searchbar
                placeholder="Hello! Seach something..."
                ref={searchDataRef}
              />
              <SearchButton>
                <SearchbarIcon />
              </SearchButton>
            </SearchbarContainer>
            <StoreGridContainer>
              <StoreGrid>
                {productData
                  .filter((array, index) =>
                    location.pathname === "/store"
                      ? index === 0
                      : location.pathname === `/store/${index + 1}`
                  )
                  .map((array) =>
                    array.map((product) => (
                      <ClickableCard
                        key={product.id}
                        to={product.path ? `/store/${product.path}` : "/store"}
                      >
                        <Card
                          key={product.id}
                          background="rgba(0,0,0,0.1)"
                          // src={product.img.src}
                          // alt={product.img.alt}
                          name={product.name}
                          price={product.price}
                          description
                          more
                        />
                      </ClickableCard>
                    ))
                  )}
              </StoreGrid>
            </StoreGridContainer>
            <PageNumberContainer>{pageNumbersElements}</PageNumberContainer>
          </>
        ) : (
          <ProductPage itemData={itemData} />
        )}
      </StoreContent>
    </StoreContainer>
  );
};

export default Store;
