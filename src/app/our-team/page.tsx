import Head from "../../components/head";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import Footer from "../../components/footer/footer";

const teamMembers = [
  {
    name: "Artem Bielikov",
    role: "Back-end developer",
    group: "КІУКІ-21-1",
    image: "",
  },
  {
    name: "Andrii Sierov",
    role: "Team lead, Full-stack developer",
    group: "КІУКІ-21-1",
    image: "",
  },
  {
    name: "Artem Karnozhytskyi",
    role: "Front-end developer",
    group: "КІУКІ-21-2",
    image: "",
  },
  {
    name: "Kateryna Skrypnyk",
    role: "UI designer",
    group: "КІУКІ-21-4",
    image: "",
  },
];

export default function OurTeam() {
  return (
    <div className="flex w-full min-h-screen flex-col justify-between gap-[2.375rem] mq750:gap-[1.188rem]">
      <Head />
      <Container fixed maxWidth="xl">
        <h3 className="text-gray-0 text-[2.7rem] text-center font-bold pb-3">
          Наша команда
        </h3>
        <Grid container spacing={12}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
              <Image src="/user-icon.png" alt="" width={512} height={512} />
              <div className="text-[1.3rem] text-center">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="font-medium text-gray-500">
                  {member.role}
                  <br />
                  {member.group}
                </p>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
