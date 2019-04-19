import React from "react"
import ReactDOM from "react-dom"
import './index.css'

function Tweet() {
	return(
		<div className="tweet">
			<Avatar />
			<div className="content">
				<NameWithHandle />
				<Message />
			</div>
			<Time />
			<div className="buttons">
				<ReplyButton />
				<RetweetButton />
				<LikeButton />
				<MoreOptionsButton />
			</div>
		</div>
	)
}

function Avatar() {
	return(
		<img src= "https://www.gravatar.com/avatar/nothing"
      	className="avatar"
      	alt="avatar" />
	)
}

function NameWithHandle() {
	return(
		<span className="NameWithHandle">
			<span className="name">Shan</span>
			<span className="handle">@dolly</span>
		</span>
	)
}

function Message() {
	return(
		<div className="message">This is my first tweet</div>
	)
}

const Time = () => (
	<span className="time">3hrs ago</span>
)

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button"/>
);

const LikeButton = () => (
  <i className="fa fa-heart like-button"/>
);


const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
); 

ReactDOM.render(<Tweet />, document.getElementById("root"))