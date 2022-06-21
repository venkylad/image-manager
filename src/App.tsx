import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { postActions } from "./store";
import { useSelector } from "./hooks/useTypedSelector";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postActions.getPosts());
    dispatch(postActions.getImages());
  }, [dispatch]);

  const images = useSelector((state) => state.images);
  const checked = useSelector((state) => state.checked);

  return (
    <main className="px-6 pt-10">
      <Header />
      <Gallery images={images} />
    </main>
  );
};

export default App;

// import { FC, useEffect } from "react";
// import { useDispatch } from "react-redux";

// import { postActions } from "../store";
// import { useSelector } from "../hooks/useTypedSelector";
// import Loader from "../components/Ui/Loader";
// import PostCard from "../components/PostCard/PostCard";

// const App: FC = () => {
// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(postActions.getPosts());
//   dispatch(postActions.getImages());
// }, [dispatch]);

// const { loading, data } = useSelector((state) => state.posts);
// const images = useSelector((state) => state.images);
// console.log(images, "IMAGES");

// return (
//   <div className="container py-5">
//     <div className="row">
//       {loading ? (
//         <Loader />
//       ) : (
//         data &&
//         data.map((post) => (
//           <div className="col-md-6 col-lg-4" key={post.id}>
//             <PostCard post={post} />
//           </div>
//         ))
//       )}
//     </div>
//   </div>
// );
// };

// export default App;
