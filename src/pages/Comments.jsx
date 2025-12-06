import React, { useState } from "react";

const Comments = () => {
  //   var [name, setName] = useState("");
  //   var [comments, setComments] = useState("");

  var [userdata, setUserdata] = useState({
    name: "",
    comments: "",
  });

  var [data, setData] = useState([]);

  console.log("Userdata", data);

  return (
    <div className=" flex flex-col gap-1 p-5">
      <div className=" flex flex-col gap-1">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          className=" border py-2 outline-none rounded-lg pl-2"
          onChange={(e) => {
            // console.log(e.target.value);
            // setName(e.target.value);
            // direct value
            // setUserdata({ ...userdata, name: e.target.value });
            // callback function
            setUserdata((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
        />
      </div>
      <div className=" flex flex-col gap-1">
        <label htmlFor="comments">Comments:</label>
        <input
          type="text"
          name="comment"
          id="comment"
          className=" border py-2 outline-none rounded-lg pl-2"
          onChange={(e) => {
            // setComments(e.target.value);
            // setUserdata({ comments: e.target.value });
            // setUserdata({ ...userdata, comments: e.target.value });
            setUserdata((prev) => {
              return { ...prev, comments: e.target.value };
            });
          }}
        />
      </div>
      <div>
        <button
          className=" py-2 px-6 rounded-lg bg-green-600 text-white"
          onClick={() => {
            setData((prev) => [...prev, userdata]);
          }}
        >
          Post
        </button>
      </div>

      {/* <p>{JSON.stringify(userdata)}</p>
       */}
      <div>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.name}</h1>
              <p>{item.comments}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
