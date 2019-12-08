package ru.sergdm.prospring5.ch2.decoupled;

public interface MessageRenderer {
	void render();
	void setMessageProvider(MessageProvider provider);
	MessageProvider getMessageProvider();
}
