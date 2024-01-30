const URL = `https://academics.newtonschool.co/api/v1/facebook/channel/`;

export async function createPageApi(token, name,description, image) {
    const fd = new FormData();
    fd.append("name", name);
    fd.append("description", description);
    fd.append("image", image);

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
      console.error("error creating page", error.message);
    }
  }
