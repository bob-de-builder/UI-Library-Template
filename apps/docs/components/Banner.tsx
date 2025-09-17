'use client';

import { Banner, Button } from '@bobs-ui/ui';

export const BannerComponent = () => {
  return (
    <div className="flex flex-col gap-5">
      <Banner
        bottomNode={
          <div className="flex gap-3 w-full mt-1">
            <Button intent="outline" size="sm">
              Cancel
            </Button>
            <Button size="sm">Refetch</Button>
          </div>
        }
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tool."
        open
        title="Info"
      />
      <Banner
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tool."
        open
        title="Success"
        type="success"
      />
      <Banner
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tool."
        open
        title="Warning"
        type="warning"
      />
      <Banner
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tool."
        open
        sideNode={
          <div className="flex gap-3">
            <Button intent="danger-outlined" size="sm">
              Cancel
            </Button>
            <Button intent="danger" size="sm">
              Delete
            </Button>
          </div>
        }
        title="Danger"
        type="danger"
      />
    </div>
  );
};
