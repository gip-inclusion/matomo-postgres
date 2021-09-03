export * from "./matomo";

export type Event = {
  idsite: string;
  idvisit: string;
  actions: string;
  country: string;
  region: string;
  city: string;
  operatingsystemname: string;
  devicemodel: string;
  devicebrand: string;
  visitduration: string;
  dayssincefirstvisit: string;
  visitortype: string;
  sitename: string;
  userid: string;
  serverdateprettyfirstaction: string;
  action_id: string;
  action_type: string;
  action_eventcategory: string;
  action_eventaction: string;
  action_eventname: string;
  action_eventvalue: string;
  action_timespent: string;
  action_timestamp: string;
  usercustomproperties: Record<string, string>;
};
