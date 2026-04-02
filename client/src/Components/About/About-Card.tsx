import { useAnimated } from "../UseHook/useAnimated";
import { skills } from "./About-skills";
import { Timeline } from "antd";

export const Cards = () => {
  useAnimated(".about__card-card");
  useAnimated(".ant-timeline-item");

  return (
    <div className="about__card-inner">
      {skills.map((group, i) => (
        <div key={i} className="about__card-card">
          <Timeline
            classNames={{
              itemIcon: "about__card-timeline-line",
            }}
            styles={{
              itemIcon: {
                background: "#9143a5",
                borderColor: "#9143a5"
              },
              itemRail: {
                background: "#9143a5",
              },
            }}
            items={group.map((item) => ({
              key: item.id,
              styles: {
                icon: {
                  color: "red",
                },
              },
              content: <p className="about__card-timeline-desc">{item.desc}</p>,
            }))}
          ></Timeline>
        </div>
      ))}
    </div>
  );
};
