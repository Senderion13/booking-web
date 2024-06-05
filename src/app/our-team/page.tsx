import Head from "../../components/head";
import { Container, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Footer from "../../components/footer/footer";
import Card from "@mui/material/Card";
import GitHubIcon from "@mui/icons-material/GitHub";

const teamMembers = [
  {
    name: "Artem Bielikov",
    role: "Back-end developer",
    group: "КІУКІ-21-1",
    image: "artem-bielikov.jpg",
  },
  {
    name: "Andrii Sierov",
    role: "Team lead, Full-stack developer",
    group: "КІУКІ-21-1",
    image: "andrii-sierov.jpg",
  },
  {
    name: "Artem Karnozhytskyi",
    role: "Front-end developer",
    group: "КІУКІ-21-2",
    image: "artem-karnozhytskyi.jpg",
  },
  {
    name: "Kateryna Skrypnyk",
    role: "UI designer",
    group: "КІУКІ-21-4",
    image: "kateryna-skrypnuk.jpg",
  },
  {
    name: "Maksym Maksymenko",
    role: "Documentation",
    group: "КІУКІ-21-2",
    image: "maksym-maksymenko.jpg",
  },
  {
    name: "Valeriia Svietlychna",
    role: "QA",
    group: "КІУКІ-21-2",
    image: "valeriia-svietlychna.jpg",
  },
];

export default function OurTeam() {
  return (
    <div className="flex w-full min-h-screen flex-col justify-between gap-[2.375rem] mq750:gap-[1.188rem]">
      <Head />
      <Container fixed maxWidth="xl">
        <div className="flex w-full h-full flex-col jusitfy between gap-[1rem]">
          <div className="text-gray-0 text-[2.7rem] text-center font-bold pb-3">
            Наша команда
          </div>

          <Grid container spacing={12} justifyContent={"center"}>
            {teamMembers.map((member, index) => (
              <Grid item sm={12} md={6} lg={4} key={index}>
                <Card>
                  <Avatar
                    src={member.image}
                    alt=""
                    sx={{ margin: "auto", width: 256, height: 256 }}
                  />
                  <div className="text-[1.3rem] text-center">
                    <h3 className="font-bold mb-2">{member.name}</h3>
                    <p className="font-medium text-gray-500">
                      {member.role}
                      <br />
                      {member.group}
                    </p>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>

          <div className="flex flex-col text-[1.3rem] text-center">
            Booking-Web
            <a
              href="https://github.com/Senderion13/booking-web"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon sx={{ width: 70, height: 70 }} />
            </a>
          </div>
          <div className="flex flex-col text-[1.3rem] text-center">
            Booking-Api
            <a
              href="https://github.com/Senderion13/booking-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon sx={{ width: 70, height: 70 }} />
            </a>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
