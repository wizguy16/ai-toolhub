import { BestAiWritingToolsMarketingBody } from "./bodies/BestAiWritingToolsMarketingBody";
import { FixCreditFast2026Body } from "./bodies/FixCreditFast2026Body";
import { PmToolsBody } from "./bodies/PmToolsBody";

type Props = {
  slug: string;
};

export function ArticleEditorialBody({ slug }: Props) {
  switch (slug) {
    case "fix-credit-fast-2026":
      return <FixCreditFast2026Body />;
    case "best-ai-writing-tools-marketing":
      return <BestAiWritingToolsMarketingBody />;
    case "pm-tools":
      return <PmToolsBody />;
    default:
      return null;
  }
}
