import KanbanItemHeader from "../KanbanItemHeader/KanbanItemHeader"
import KanbanViewBottom from "../KanbanViewBottom/KanbanViewBottom";
import styles from "./KanbanItem.module.css";


type HeaderProps = {
    header: string;
    data: string[] 
}

type Props = {
  icon: React.ReactElement;
  title?: string;
  number: number;
  dataHeader: HeaderProps[];
  color: string
}

export default function KanbanItem({icon, title, number, dataHeader, color}: Props) {
  return (
    <div className={styles.container}>
      <KanbanItemHeader icon={icon} number={number} title={title} color={color}/>
      <KanbanViewBottom icon={icon} dataHeader={dataHeader} color={color}/>
    </div>
  )
}