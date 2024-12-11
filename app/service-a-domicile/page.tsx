import React from "react";
import { FormTabs } from "./components/FormTab";

const Page = () => {
  return (
    <div>
      <div className="h-20"></div>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-[2] sm:hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="md:max-w-lg sm:rounded-lg w-full"
                alt=""
              />
            </div>
            <div className="flex-[3] max-w-2xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0">
              <FormTabs />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
