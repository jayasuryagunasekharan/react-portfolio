import React from 'react'
import styled from 'styled-components'
import { FaGraduationCap, FaCalendarAlt, FaStar, FaBook, FaTools, FaCircle } from 'react-icons/fa'

// Styled Components
const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.card_background};

    &:hover {
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }

    @media only screen and (max-width: 768px){
        width: 100%;
        padding: 16px;
    }
`

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

const SchoolLogo = styled.img`
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 8px;
`

const SchoolInfo = styled.div`
    display: flex;
    flex-direction: column;
`

const SchoolName = styled.h3`
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    margin: 0;
`

const Degree = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    margin: 4px 0;
`

const Date = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: ${({ theme }) => theme.text_secondary};
`

const Grade = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    color: ${({ theme }) => theme.text_primary};
`

const SectionTitle = styled.h4`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
`

const Activities = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.text_secondary};
    margin: 0;
`

const CourseworkList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const CourseworkItem = styled.li`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: ${({ theme }) => theme.text_primary};
`

const BulletPoint = styled(FaCircle)`
    font-size: 8px;
    color: ${({ theme }) => theme.primary};
`

const SkillsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const SkillBadge = styled.span`
    background-color: ${({ theme }) => theme.skill_background};
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 14px;
    color: ${({ theme }) => theme.text_primary};
`

const EducationCard = ({ education }) => {
    return (
        <Card>
            <Header>
                <SchoolLogo src={education.img} alt={`${education.school} logo`} />
                <SchoolInfo>
                    <SchoolName>{education.school}</SchoolName>
                    <Degree>{education.degree}</Degree>
                </SchoolInfo>
            </Header>
            <Date>
                <FaCalendarAlt />
                <span>{education.date}</span>
            </Date>
            <Grade>
                <FaStar />
                <span>Grade: {education.grade}</span>
            </Grade>
            <SectionTitle>
                <FaBook />
                Activities and Societies
            </SectionTitle>
            <Activities>{education.activities}</Activities>
            <SectionTitle>
                <FaTools />
                Coursework
            </SectionTitle>
            <CourseworkList>
                {education.coursework.map((course, index) => (
                    <CourseworkItem key={index}>
                        <BulletPoint />
                        {course}
                    </CourseworkItem>
                ))}
            </CourseworkList>
            {/* <SectionTitle>
                <FaGraduationCap />
                Skills
            </SectionTitle>
            <SkillsList>
                {education.skills.map((skill, index) => (
                    <SkillBadge key={index}>{skill}</SkillBadge>
                ))}
            </SkillsList> */}
        </Card>
    )
}

export default EducationCard