import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Form, Field } from "react-final-form";
import { createSite } from "../../lib/db";

export default function AddSiteModal() {
  let [isOpen, setIsOpen] = useState(closed);

  const onSubmit = (values) => {
    createSite(values);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg shadow-md px-4 py-2 bg-teal-200"
      >
        Add Your First Site
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className=" bg-neutral-50 rounded-lg shadow-md py-16 px-6 w-1/3">
            <Dialog.Title className="text-xl bold mb-8">Add Site</Dialog.Title>
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="w-full">
                  <div className="mb-4 w-full">
                    <label className="block mb-2">Site Name</label>
                    <Field
                      name="sitetName"
                      component="input"
                      placeholder="Site Name"
                      className="block w-full h-8 rounded-lg"
                    />
                  </div>

                  <div className="mb-8 w-full">
                    <label className="block mb-2">Site Link</label>
                    <Field
                      name="siteLink"
                      component="input"
                      placeholder="Site Link"
                      className="block w-full h-8 rounded-lg"
                    />
                  </div>
                  <div className="w-full flex justify-end">
                    <button
                      className="rounded-lg shadow-md px-4 py-2 bg-gray-200 mr-4"
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="rounded-lg shadow-md px-4 py-2 bg-teal-200"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
