import React from 'react'
import TextExpander from "./TextExpander/TextExpander";
import "./TextHider.css"

const TextHider = () => {
    return (
        <div>
            <TextExpander>
                Learn new skills or earn credit towards a degree at your own pace, with no deadlines, using free courses
                from Saylor Academy. We're committed to removing barriers to education and helping you build essential
                skills to advance your career goals. Choose a course below, or check out our full course catalog.
                Log in or Sign up to enroll in courses, track your progress, gain access to final exams, and get a free
                certificate of completion!</TextExpander>
            <TextExpander
                collapseNumWord={20}
                expandButtonText="Show Text"
                collapseButtonText="Collapse Text"
                buttonColor="#ff6622">
                Reading is good for you because it improves your focus, memory,
                empathy, and communication skills. It can
                reduce stress, improve your mental health, and help you live longer. Reading also allows you to learn
                new things to help you succeed in your work and relationships.
            </TextExpander>
            <TextExpander expanded={true} className="box">The Power of Reading helps to develop inference and
                deduction and
                comprehension skills. It also involves
                children regularly writing in different genres and creates a more cohesive learning experience. •
                Literacy is at the heart of the curriculum and the texts facilitate a range of exciting cross curricular
                work.</TextExpander>
        </div>
    )
}

export default TextHider
