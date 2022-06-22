import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { postActions } from "./store";
import { useSelector } from "./hooks/useTypedSelector";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      postActions.getImages(
        "https://api.unsplash.com/photos/?client_id=63XyR-MdNNJwESg67izcfmHsZOB07CMpSZd0iQ4nshI&per_page=20&orientation=landscape"
      )
    );
  }, [dispatch]);

  const images = useSelector((state) => state.images);

  return (
    <main className="px-6 pt-10">
      <Header />
      <Gallery images={images} />
    </main>
  );
};

export default App;
