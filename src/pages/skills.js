import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Header from '../components/Header';
import SkillsList from '../components/skills/SkillsList'

const skills = () => {
    return (
        <Layout>
            <SEO title="skills"></SEO>
            <Header content="Skills" />
            <SkillsList />
        </Layout>
    )
}

export default skills;
