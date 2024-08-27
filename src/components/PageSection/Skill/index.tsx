import React, {useEffect, useRef, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SkillBar from 'react-skillbars';
import './style.scss'

interface Skill {
    type: string;
    level: number;
}

const SkillSection: React.FC<{ title: string, skills: Skill[] }> = ({ title, skills }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
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

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
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
                    <SkillSection title="后端开发" skills={backendSkills} />
                </Col>
                <Col md={6}>
                    <SkillSection title="前端开发" skills={frontendSkills} />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <SkillSection title="数据开发" skills={dataSkills} />
                </Col>
                <Col md={6}>
                    <SkillSection title="运维与网络" skills={opsSkills} />
                </Col>
            </Row>
        </Container>
    );
};

export default Skills;