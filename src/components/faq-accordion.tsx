import type { FAQ } from "@/lib/content";
import { TextLink } from "./ui";

export function FAQAccordion({ items }: { items: FAQ[] }) {
  return (
    <div className="faq-accordion">
      {items.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary>
            {item.question}
            <span className="faq-indicator" aria-hidden="true" />
          </summary>
          <div className="faq-answer">
            <p>{item.answer}</p>
            {item.href && (
              <TextLink href={item.href}>{item.linkLabel}</TextLink>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
