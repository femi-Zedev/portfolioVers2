import { BlogArticles } from "@/components/blog/BlogArticles";
import { SectionHeader } from "@/components/utils/SectionHeader";

export const Writing = () => {
  return (
    <section id="writing" className="section-wrapper">
      <SectionHeader title="Writing" dir="l" />
      <div className="mt-8">
        <BlogArticles />
      </div>
    </section>
  );
}; 