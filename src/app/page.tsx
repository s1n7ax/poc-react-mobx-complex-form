"use client";

import Form from "@/components/Form";
import { staticData } from "@/lib/data/static-data";

const wait = () => {
  return new Promise((res) => setTimeout(res, 1000));
};

const saveData = async () => {
  await wait();
  console.log("done");
};

export default function Home() {
  return (
    <div>
      <Form data={staticData} action={saveData} />
    </div>
  );
}
