import KanbanViewBottomItem from "../KanbanViewBottomItem/KanbanViewBottomItem";
import styles from "./KanbanViewBottom.module.css";

type HeaderProps = {
  header: string;
  data: string[] 
}

type Props ={
    icon: React.ReactElement;
    dataHeader: HeaderProps[];
    color: string;
}

export default function KanbanViewBottom({icon, dataHeader, color} : Props) {
  return (
    <div className={styles.container}>
      {dataHeader.map((item, index) => (
        <KanbanViewBottomItem 
          key={index} 
          icon={icon} 
          header={item.header} 
          data={item.data} 
          color={color}
        />
      ))}
    </div>
  )
}