import { ChatSidebar } from "components/ChatSideBar";
import { Message } from "components/Message";
import Head from "next/head";
import { streamReader } from "openai-edge-stream";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function ChatPage() {
    const [incomingMessage, setIncomingMessage] = useState("");
    const [messageText, setMessageText] = useState("");
    const [newChatMessages, setNewChatMessages] = useState([]);
    const [generatingResponse, setGeneratingResponse] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setGeneratingResponse(true);
        setNewChatMessages((prev) => {
            return [
                ...prev,
                {
                    _id: uuid(),
                    role: "user",
                    content: messageText,
                },
            ];
        });
        setMessageText("");

        const response = await fetch(`/api/chat/createNewChat`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                message: messageText,
            }),
        });

        const json = await response.json();
        console.log ( "NEW CHAT:", json);
        // const response = await fetch(`/api/chat/sendMessage`, {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify({ message: messageText }),
        // });
        // const data = response.body;
        // if (!data) {
        //     return;
        // }

        // const reader = data.getReader();
        // await streamReader(reader, async (message) => {
        //     setIncomingMessage((s) => `${s}${message.content}`);
        // });

        setGeneratingResponse(false);
    };

    return (
        <>
            <Head>
                <title>Chat ID Page</title>
            </Head>
            <div className="grid h-screen grid-cols-[260px_1fr]">
                <ChatSidebar />
                <div className="flex flex-col overflow-hidden bg-gray-700">
                    <div className="flex-1 overflow-auto text-white">
                        {newChatMessages.map((message) => {
                            return (
                                <Message
                                    key={message._id}
                                    role={message.role}
                                    content={message.content}
                                />
                            );
                        })}
                        {!!incomingMessage && (
                            <Message
                                role="assistant"
                                content={incomingMessage}
                            />
                        )}
                    </div>
                    <footer className="bg-gray-800 p-10">
                        <form onSubmit={handleSubmit}>
                            <fieldset
                                className="flex gap-2"
                                disabled={generatingResponse}
                            >
                                <textarea
                                    value={messageText}
                                    onChange={(e) =>
                                        setMessageText(e.target.value)
                                    }
                                    className="w-full resize-none rounded-md bg-gray-700 p-2 text-white focus:border-emerald-500 focus:bg-gray-600 focus:outline focus:outline-emerald-500"
                                    placeholder={
                                        generatingResponse
                                            ? ""
                                            : "Send a message. . . "
                                    }
                                ></textarea>
                                <button type="submit" className="btn">
                                    Send
                                </button>
                            </fieldset>
                        </form>
                    </footer>
                </div>
            </div>
        </>
    );
}
