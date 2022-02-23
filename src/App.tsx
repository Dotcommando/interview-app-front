import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Route path="/" element={<Start />} />
        <Route path="interviews" element={<Interviews />}>
          <Route path="create-interview" element={<CreateInterview />} />
          <Route path=":interviewId" element={<Interview />} />
        </Route>
        <Route path="skills" element={<Skills />}>
          <Route path="add-skill" element={<AddSkill />} />
          <Route path=":skillId" element={<Skill />} />
        </Route>
        <Route path="candidates" element={<Candidates />}>
          <Route path="add-candidate" element={<AddCandidate />} />
          <Route path=":candidateId" element={<Candidate />}>
            <Route path="start-interview" element={<StartInterview />} />
            <Route path="interview-result" element={<InterviewResult />} />
          </Route>
        </Route>
      </Router>
    </>
  );
}

export default App;
