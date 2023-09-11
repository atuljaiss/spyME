const getTopics = async (email) => {
    try {
      const emailid = email;
      const url = `http://localhost:3000/api/topics?emailid=${emailid}`;
      const res = await fetch(url, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch topics");
      }
      return res.json();
    } catch (error) {
      console.log("Error loading topics: ", error);
    }
  };


async function display({ params }) {
  

    const {topics} = await getTopics(params.email);
    
    return (
      <>
        <div className="bg-gradient-to-tr from-red-500 to-purple-400 relative h-screen w-screen">
            <img
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
            alt="main background image"
            src="https://source.unsplash.com/random"
            />
        
  
        {topics.map((t) => (
          <div
            key={t._id}
            className="p-4  my-3 flex gap-5 items-start text-white bg-white justify-center"
          >
            <div className="absolute flex flex-col inset-0 min-h-screen  items-center justify-center">
              <h2 className="font-bold text-2xl">Name : {t.name}</h2>
              <p> Email :{t.email} </p>
              <p> Number :{t.number} </p>
              <p> First Name: {t.fname} </p>
              <p> Last Name: {t.lname}</p>
            </div>
  
            
          </div>
        ))}
        </div>
      </>
    );
  }
  export default display;