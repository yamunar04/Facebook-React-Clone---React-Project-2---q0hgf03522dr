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

      return resData;
    } catch (error) {
      console.error("error creating post", error.message);
    }
  }

