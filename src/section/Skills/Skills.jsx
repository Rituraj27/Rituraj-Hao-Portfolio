import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillsList from "../../common/SkillsList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillsList}>
        <SkillsList src={checkMarkIcon} skill="HTML" />
        <SkillsList src={checkMarkIcon} skill="CSS" />
        <SkillsList src={checkMarkIcon} skill="JavaScript" />
      </div>
      <hr />
      <div className={styles.skillsList}>
        <SkillsList src={checkMarkIcon} skill="React" />
        <SkillsList src={checkMarkIcon} skill="Tailwind" />
        <SkillsList src={checkMarkIcon} skill="NodeJS" />
        <SkillsList src={checkMarkIcon} skill="React" />
      </div>
      <hr />
      <div className={styles.skillsList}>
        <SkillsList src={checkMarkIcon} skill="Git" />
        <SkillsList src={checkMarkIcon} skill="Github" />
        <SkillsList src={checkMarkIcon} skill="Netify" />
        <SkillsList src={checkMarkIcon} skill="VS-Code" />
        <SkillsList src={checkMarkIcon} skill="IntelliJ" />
      </div>
    </section>
  );
}

export default Skills;
