import React, {useEffect, useRef, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SkillBar from 'react-skillbars';
import './style.scss'
import {useTranslation} from "react-i18next";

interface Skill {
    type: string;
    level: number;
}

const SkillSection: React.FC<{ title: string, skills: Skill[] }> = ({ title, skills }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const skillBarOptions = {
        height: 20,
        animationDuration: 2000,
        animationDelay: 500,
    };

    return (
        <div ref={ref}>
            <h2>{title}</h2>
            {isVisible && <SkillBar skills={skills} {...skillBarOptions} />}
        </div>
    );
};

const Skills: React.FC = () => {

    const {t} = useTranslation();

    const backendSkills: Skill[] = [
        {type: "C#/.NET", level: 100},
        {type: "EF Core", level: 80},
        {type: "Java", level: 50},
        {type: "Python", level: 20},
        {type: "PHP", level: 10},
    ];

    const frontendSkills: Skill[] = [
        {type: "JS/TS", level: 70},
        {type: "React", level: 60},
        {type: "Vue", level: 50},
        {type: "Blazor", level: 50},
        {type: "SCSS/Less", level: 20},
    ];

    const dataSkills: Skill[] = [
        {type: "Postgres", level: 80},
        {type: "SQLServer", level: 80},
        {type: "Redis", level: 50},
        {type: "ClickHouse", level: 40},
        {type: "Kettle", level: 30},
    ];

    const opsSkills: Skill[] = [
        {type: "Docker", level: 80},
        {type: "Kubernetes", level: 60},
        {type: "CI/CD", level: 50},
        {type: "Shell", level: 40},
        {type: "VMware", level: 20}
    ];

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <SkillSection title={t('skill.backend')} skills={backendSkills} />
                </Col>
                <Col md={6}>
                    <SkillSection title={t('skill.frontend')} skills={frontendSkills} />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <SkillSection title={t('skill.data_develop')} skills={dataSkills} />
                </Col>
                <Col md={6}>
                    <SkillSection title={t('skill.ops')} skills={opsSkills} />
                </Col>
            </Row>
        </Container>
    );
};

export default Skills;