import React from "react";
import { Bookmark } from "lucide-react";
import Card from "./components/card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://example.com/logos/google.png",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$25/hr",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo: "https://example.com/logos/microsoft.png",
      companyName: "Microsoft",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$40/hr",
      location: "Lahore, Pakistan",
    },
    {
      brandLogo: "https://example.com/logos/amazon.png",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$20/hr",
      location: "Islamabad, Pakistan",
    },
    {
      brandLogo: "https://example.com/logos/netflix.png",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$30/hr",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo: "https://example.com/logos/spotify.png",
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
      {jobOpenings.map(function (job) {
        return (
          <Card
            companyName={job.companyName}
            datePosted={job.datePosted}
            post={job.post}
            tag1={job.tag1}
            tag2={job.tag2}
            pay={job.pay}
            location={job.location}
          />
        );
      })}
    </div>
  );
};

export default App;
