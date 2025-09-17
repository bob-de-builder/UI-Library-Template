"use client";

import { Banner, Button } from "@bob/ui";

export const BannerComponent = () => {
  return (
    <div className="flex flex-col gap-5">
      <Banner
        open
        title="Info"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tool."
        bottomNode={
          <div className="flex gap-3 w-full mt-1">
            <Button size="sm" variant="outlined">
              Cancel
            </Button>
            <Button size="sm">Refetch</Button>
          </div>
        }
      />
      <Banner
        open
        title="Success"
        type="success"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tool."
      />
      <Banner
        open
        title="Warning"
        type="warning"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tool."
      />
      <Banner
        open
        title="Danger"
        type="danger"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tool."
        sideNode={
          <div className="flex gap-3">
            <Button size="sm" variant="danger-outlined">
              Cancel
            </Button>
            <Button size="sm" variant="danger">
              Delete
            </Button>
          </div>
        }
      />
    </div>
  );
};
