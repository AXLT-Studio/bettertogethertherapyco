"use client";

import { useId, useState } from "react";

type ServiceTopic = {
  title: string;
  description?: string;
  expandedDescription?: string;
};

function ServiceTopicItem({ topic }: { topic: ServiceTopic }) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();

  return (
    <li className="service-topic-item">
      <button
        type="button"
        className="service-topic-toggle"
        id={`${id}-toggle`}
        aria-expanded={expanded}
        aria-controls={`${id}-content`}
        onClick={() => setExpanded((value) => !value)}
      >
        <span className="service-topic-copy">
          <span className="service-topic-title">{topic.title}</span>
          {topic.description && (
            <span className="service-topic-description">
              {topic.description}
            </span>
          )}
        </span>
        <span className="faq-indicator" aria-hidden="true" />
      </button>
      <div
        className="service-topic-content"
        id={`${id}-content`}
        role="region"
        aria-labelledby={`${id}-toggle`}
        aria-hidden={!expanded}
        inert={!expanded}
        data-expanded={expanded}
      >
        <div className="service-topic-content-inner">
          <p>
            {topic.expandedDescription ?? "Expanded description will go here."}
          </p>
        </div>
      </div>
    </li>
  );
}

export function ServiceTopicAccordion({ items }: { items: ServiceTopic[] }) {
  return (
    <ul className="detail-list service-topic-accordion">
      {items.map((topic) => (
        <ServiceTopicItem key={topic.title} topic={topic} />
      ))}
    </ul>
  );
}
