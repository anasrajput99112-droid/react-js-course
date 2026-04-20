import React from "react";
import { Bookmark } from "lucide-react";
import Card from "./components/card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://s3-alpha.figma.com/hub/file/2729744958/2a5758d6-4edb-4047-87bb-e6b94dbbbab0-cover.png",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$25/hr",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/500px-Microsoft_logo.svg.png",
      companyName: "Microsoft",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$40/hr",
      location: "Lahore, Pakistan",
    },
    {
      brandLogo: "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$20/hr",
      location: "Islamabad, Pakistan",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/500px-Netflix_icon.svg.png?_=20220806170125",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$30/hr",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/3840px-Spotify_logo_without_text.svg.png",
      companyName: "Spotify",
      datePosted: "3 weeks ago",
      post: "Mobile App Developer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$35/hr",
      location: "Remote",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, index) {
        return <div key={index}>
          <Card
            img={elem.brandLogo}
            company={elem.companyName}
            datePosted={elem.datePosted}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
        </div>;
      })}
    </div>
  );
};

export default App;
