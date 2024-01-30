const URL = `https://academics.newtonschool.co/api/v1/facebook/post/`;

export async function createPostApi(token, title,content, images, channelId) {
    const fd = new FormData();
    fd.append("title", title);
    fd.append("content", content);
    fd.append("images", images);
    fd.append("channelId", channelId)
    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "projectID": "q0hgf03522dr",
          "Authorization": `Bearer ${token}`,
        },
        body: fd,
      });
      const resData = await res.json();
      console.log(resData);
      return resData;
    } catch (error) {
      console.error("error creating post", error.message);
    }
  }


//   <Avatar
//                   src={communityPostUser?.profileImage}
//                   sx={{
//                     height: "24px",
//                     width: "24px",
//                     objectFit: "contain",
//                     marginRight: "0.5rem",
//                   }}
//                 >
//                   {communityPostUser?.name?.charAt(0).toUpperCase() || "NA"}
//                 </Avatar>