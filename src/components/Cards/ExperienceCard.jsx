import React from 'react'
import styled from 'styled-components'
import { FaCircle, FaBriefcase, FaCalendarAlt, FaStar, FaTools, FaUsers } from 'react-icons/fa'

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
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const CompanyLogo = styled.img`
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 8px;
`;

const CompanyInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const Role = styled.h3`
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    margin: 0;
`;

const CompanyName = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    margin: 4px 0;
`;

const Date = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: ${({ theme }) => theme.text_secondary};
`;

const Grade = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    color: ${({ theme }) => theme.text_primary};
`;

const SectionTitle = styled.h4`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    margin-top: 8px;
`;

const DescriptionList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const DescriptionItem = styled.li`
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 6px;
    font-size: 14px;
    color: ${({ theme }) => theme.text_primary};
`;

const BulletPoint = styled(FaCircle)`
    font-size: 8px;
    color: ${({ theme }) => theme.primary};
    margin-top: 5px;
`;

const SkillsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const SkillBadge = styled.span`
    background-color: ${({ theme }) => theme.skill_background};
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 14px;
    color: ${({ theme }) => theme.text_primary};
`;

const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Header>
                <CompanyLogo src={experience.img} alt={`${experience.company} logo`} />
                <CompanyInfo>
                    <Role>{experience.role}</Role>
                    <CompanyName>{experience.company}</CompanyName>
                    <Date>
                        <FaCalendarAlt />
                        <span>{experience.date}</span>
                    </Date>
                </CompanyInfo>
            </Header>
            <SectionTitle>
                <FaTools />
                Responsibilities
            </SectionTitle>
            <Description>
                <DescriptionList>
                    {experience.desc.map((desc, index) => (
                        <DescriptionItem key={index}>
                            <BulletPoint />
                            <span>{desc}</span>
                        </DescriptionItem>
                    ))}
                </DescriptionList>
            </Description>
            <SectionTitle>
                <FaStar />
                Achievements
            </SectionTitle>
            <Description>
                <DescriptionList>
                    {experience.achievements && experience.achievements.map((achievement, index) => (
                        <DescriptionItem key={index}>
                            <BulletPoint />
                            <span>{achievement}</span>
                        </DescriptionItem>
                    ))}
                </DescriptionList>
            </Description>
            <SectionTitle>
                <FaUsers />
                Skills
            </SectionTitle>
            <SkillsList>
                {experience.skills.map((skill, index) => (
                    <SkillBadge key={index}>{skill}</SkillBadge>
                ))}
            </SkillsList>
        </Card>
    );
};

export default ExperienceCard;