import React, {useState} from 'react'

const TextExpander = ({
                          children,
                          collapseNumWord = 10,
                          expandButtonText = "show more",
                          collapseButtonText = "Show less",
                          buttonColor,
                          expanded = false,
                          className
                      }) => {
    const [isExpand, setIsExpand] = useState(expanded);
    const displayText = isExpand ? children : children.split(' ').slice(0, collapseNumWord).join(" ") + " ...";
    const handleExpand = () => {
        setIsExpand(prevExpand => !prevExpand)
    }

    return (
        <div className={className}>
            <span> {displayText}</span>
            <button onClick={handleExpand}>{isExpand ? collapseButtonText : expandButtonText}</button>
        </div>
    )
}

export default TextExpander
