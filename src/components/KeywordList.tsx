// KeywordList.tsx
import React from "react";
import { Link } from "react-router-dom";

interface KeywordListProps {
  keywords: string[];
  onKeywordClick: (keyword: string) => void;
}

const KeywordList: React.FC<KeywordListProps> = ({
  keywords,
  onKeywordClick,
}) => (
  <div className="keyword-list">
    <h2>Searched recently</h2>
    <ul>
      {keywords.map((keyword, index) => (
        <li key={index}>
          <Link
            to={`/search/keyword=${keyword}`}
            onClick={() => onKeywordClick(keyword)}
          >
            {keyword}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default KeywordList;
