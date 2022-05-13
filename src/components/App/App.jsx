import React, {Component} from "react";
import { Statistics } from "../Statistics/Statistics";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Section } from "../Section/Section";
import { Notification } from "../Notification/Notification";
import { Container } from "./App.styled";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state
    return (good + neutral + bad)
  }

  countPositiveFeedbackPercentage = () => {
    const {good, neutral, bad} = this.state
    return Math.ceil((good/(good + neutral + bad) * 100))  
  }

  onLeaveFeedback = (e) => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1
    }))
  }

  render() {
    const {good, neutral, bad} = this.state

    return (
      <Container>         
        <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        ></FeedbackOptions>
        </Section>
      
        <Section title={'Statistics'}>
          {this.countTotalFeedback()?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}>
          </Statistics>
          :<Notification
           message="There is no feedback"
          ></Notification>}
        </Section>
      </Container>
    )
  }

};


