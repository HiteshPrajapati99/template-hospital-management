import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Main = () => {
  const navigate = useNavigate();

  const [Sub_Modal, setSub_Modal] = useState(false);

  const accountPages = [
    {
      id: 1,
      icon: "/user_icons/pets_foot.png",
      title: "Pets",
      sub_title: "Manage your furry friends and their medical history",
      path: "pets",
    },
    {
      id: 2,
      icon: "/user_icons/user-icon.png",
      title: "Personal Information",
      sub_title: "Update your personal details such as your name, contact etc.",
      path: "",
    },
    {
      id: 3,
      icon: "/user_icons/gallery.png",
      title: "Photo",
      sub_title:
        "Upload a photo of pet so the veterinary can know who they are interacting with",
      path: "photo",
    },
    {
      id: 4,
      icon: "/user_icons/payment.png",
      title: "Payment History",
      sub_title:
        "Lorem ipsum dolor sit amet consectetur. Id dolor mauris tortor sed.",
      path: "payment_history",
    },
    {
      id: 5,
      icon: "/user_icons/user_chat.png",
      title: "Feedback to Doctor",
      sub_title: "Provide feedback to your doctor about your experience",
      path: "feedback_doctor",
    },
    {
      id: 6,
      icon: "/user_icons/messeges.png",
      title: "Feedback to Admin",
      sub_title: "Provide feedback to the admin if you have any suggestions",
      path: "feedback_admin",
    },
    // {
    //   id: 7,
    //   icon: "/user_icons/subscription.png",
    //   title: "Subscription",
    //   sub_title:
    //     "Lorem ipsum dolor sit amet consectetur. Id dolor mauris tortor sed.",
    // },
  ];

  return (
    <Wrapper>
      <div className="title">
        <p className="text-2xl font-bold text-white"> My Account </p>
      </div>

      <div className="grid grid-cols-1 gap-8 px-8 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-20 2xl:grid-cols-4">
        {accountPages.map((i) => (
          <div
            key={i.id}
            className="pages_box group transition-all duration-200 hover:animate-pulse active:scale-95"
            onClick={() => i.path && navigate(i.path)}
          >
            <div className="icon_bg">
              <img
                src={i.icon}
                alt="icon"
                className="h-full w-full transition duration-300 group-hover:scale-125"
              />
            </div>
            <p className="mt-2 text-lg  font-semibold text-white">{i.title}</p>
            <p className="mt-1 text-muted">{i.sub_title}</p>
          </div>
        ))}
        <div
          className="pages_box group transition-all duration-200 hover:animate-pulse active:scale-95"
          onClick={() => setSub_Modal(true)}
        >
          <div className="icon_bg">
            <img
              src="/user_icons/subscription.png"
              alt="icon"
              className="h-full w-full transition duration-300 group-hover:scale-125"
            />
          </div>
          <p className="mt-2 text-lg  font-semibold text-white">Subscription</p>
          <p className="mt-1 text-muted">
            Lorem ipsum dolor sit amet consectetur. Id dolor mauris tortor sed.
          </p>
        </div>
      </div>

      <DetailsModal open={Sub_Modal} setOpen={setSub_Modal} />
    </Wrapper>
  );
};

export default Main;

type ModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DetailsModal = ({ open, setOpen }: ModalProps) => {
  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)} modal>
      <DialogContent className="rounded-md border-none py-10 text-white  md:max-w-2xl 2xl:max-w-3xl">
        <Wrapper className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="subscribe_box flex flex-col justify-between p-6">
            <div>
              <p>Basic Plan</p>
              <p className="py-3 text-3xl font-bold">
                $5/month or <br /> $50/year
              </p>
              <p>First month free for a limited time</p>

              <div className="mt-3 grid gap-4">
                <p className="flex items-center gap-2 text-sm 2xl:text-base">
                  <CheckCircle className="h-5 w-5" /> Access to basic pet health
                  information.
                </p>
                <p className="flex items-center gap-2 text-sm 2xl:text-base">
                  <CheckCircle className="h-5 w-5" /> Symptom checker.
                </p>
                <p className="flex items-center gap-2 text-sm 2xl:text-base">
                  <CheckCircle className="h-5 w-5" /> Basic consultation.
                </p>
              </div>
            </div>

            <Button className="mt-20 w-fit rounded-2xl px-8 py-6 text-black">
              Get Started
            </Button>
          </div>

          <div className="subscribe_box p-6">
            <p>Premium Plan</p>
            <p className="py-3 text-3xl font-bold">
              $15/month or <br /> $150/year
            </p>

            <p>Discounted first three months ($10/month)</p>
            <div className="mt-3 grid gap-4">
              <p className="flex items-center gap-2 text-sm 2xl:text-base">
                <CheckCircle className="h-5 w-5" /> Access to basic pet health
                information.
              </p>
              <p className="flex items-center gap-2 text-sm 2xl:text-base">
                <CheckCircle className="h-5 w-5" /> Priority support.
              </p>
              <p className="flex items-center gap-2 text-sm 2xl:text-base">
                <CheckCircle className="h-5 w-5" /> Access to exclusive content.
              </p>
            </div>

            <Button className="mt-20 rounded-2xl px-8 py-6 text-black">
              Get Started
            </Button>
          </div>
        </Wrapper>
      </DialogContent>
    </Dialog>
  );
};

const Wrapper = styled.div`
  .pages_box {
    border-radius: 20px;
    background: linear-gradient(135deg, #032c4e 0%, #033056 100%);
    box-shadow:
      -1px -1px 2px 0px rgba(1, 18, 33, 0.5) inset,
      1px 1px 2px 0px rgba(5, 74, 131, 0.3) inset,
      7px 7px 18px 0px rgba(1, 18, 33, 0.9),
      -7px -7px 14px 0px rgba(5, 74, 131, 0.9),
      7px -7px 14px 0px rgba(1, 18, 33, 0.2),
      -7px 7px 14px 0px rgba(1, 18, 33, 0.2);
    padding: 20px;
    cursor: pointer;

    .icon_bg {
      width: 50px;
      height: 50px;
      padding: 8px;
      border-radius: 10px;
      background: linear-gradient(259deg, #005d69 0%, #60f1fb 85.29%);
    }
  }

  .subscribe_box {
    border-radius: 15px;
    border: 1px solid #3dbac5;
    background: linear-gradient(0deg, #295b81 0%, #295b81 100%),
      linear-gradient(136deg, #03335b 0%, #06375f 98.81%);
  }
`;
