import React from 'react';
import { skillsData, programmingSkillsData } from '../skillsData';

const SkillItem = ({ skill }) => (
    <div className="text-left py-2 flex space-x-4 items-center">
        <img src={skill.image} alt="Experience icon" className="w-10 h-10" />
        <div>
            <p className="text-white">
                {skill.name}
                <br />
                <span className={`text-gray-400 `}>
                    {skill.level}
                </span>
            </p>
        </div>
    </div>
);

const SkillsList = ({ skills }) => (
    <div>
        {skills.map(skill => (
            <SkillItem key={skill.id} skill={skill} />
        ))}
    </div>
);

const SkillList = () => (
    <div className="p-8 flex flex-col items-center">
        <div className="flex flex-col md:flex-row gap-8">
            <div className="p-4 border rounded-lg shadow-lg w-full md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4 text-center text-white">Front-End Development</h2>
                <SkillsList skills={skillsData} />
            </div>
            <div className="p-4 border rounded-lg shadow-lg w-full md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4 text-center text-white">Computer Programming</h2>
                <SkillsList skills={programmingSkillsData} />
            </div>
        </div>
    </div>
);

export default SkillList;
