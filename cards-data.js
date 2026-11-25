/*
  Version History
  11-25-2026 Update for how Lisa works: rename Keep my voice to Keep the author's voice; reword Don't make additional changes to change only what is asked and list other problems; add rewording awkward sentences to line edit; make Show my edits return marked-up text before finalizing; update the scope one-liner and add an American English default one-liner.
  11-24-2026 Replace the Dimpy reference in the purpose note with AI.
  11-24-2026 Add mode cross-reference notes to Keep my voice, Edit level, Show my edits, Don't make additional changes, and Directions first.
  11-24-2026 Change the clean seed one-liner to clean handoff now that Seeds are Modes.
  11-24-2026 Trim version history before 11-24-2026.
  11-24-2026 Add Keep my voice, Edit level, Show my edits, and Consistency check cards for manuscript editing.
  11-24-2026 Tune for manuscript editing: delete Concise Coworker, Continue in new chat (simple), Fix formatting, Don't be over confident, Validate Assumptions First, and Review risks; rewrite Don't make additional changes for section-only edits; add a section-only one-liner; re-rank cards within each tier; limit favorites to the top five.
  11-24-2026 Remove Private Session, Open new chat preload with prompt, Using Triggers, Friendlier personality, and Don't lead me astray; fold their topics into Concise Coworker; remove two one-liners; rename Fix my input to Directions first; make Set default personality and behavior a self-describing prompt for any AI; replace ChatGPT with the AI; drop bullet prefixes from the thorough handoff; drop ChatGPT from author.
*/

/*
  cards-data.txt
  11-24-2026
  Author: Art Malin
  Purpose: Externalized card data for the AI Cheat Sheet.

  Maintenance notes
  - Keep all cards in one shared schema.
  - directives = main = body = pink = coral = text of card.
  - Keep rendering and behavior in the HTML file.
  - Preserve ids unless intentionally replacing a card.
  - directivesType "paste" should contain prompt-helpful text only.
  - Avoid bullets or unnecessary punctuation inside directive text.
  - topics = card-level dropdown filters for the page.
  - directiveItems = item-level data for topic-filtered one-liner cards.
*/

window.MAIN_CARD_DATA = [
{
    id: "Don't make additional changes",
    tier: 1,
    sortOrder: 10,
    topics: ["favorites", "behavior", "risk", "programming/html"],
    title: "Don't make additional changes",
    tooltip: "Change only what I ask and leave everything else exactly as it is.",
    directivesType: "paste",
    directives: [
      "Use the text or file I give you as the source of truth",
      "Change only what I ask",
      "Leave everything else word for word unchanged",
      "Preserve the author's voice wording structure and formatting outside the requested change",
      "Do not rewrite smooth tighten or improve anything I did not ask about",
      "If you spot other problems list them but do not fix them unless I say so",
      "List exactly what you changed",
      "If I gave you a file return the full updated file",
      "If anything is unclear stop and ask"
    ],
    help: [
      "Use this when you want help with one thing and nothing else may change.",
      "This prevents the AI from quietly rewording polishing or rearranging parts you did not ask it to touch.",
      "For a whole editing session, the Manuscript Editing mode includes this."
    ],
    modifiedBy: "Art Malin",
    collapsible: true
  },
{
    id: "Keep the author's voice",
    tier: 1,
    sortOrder: 12,
    topics: ["favorites", "behavior", "writing"],
    title: "Keep the author's voice",
    tooltip: "Keep the author's style and wording instead of the AI's.",
    directivesType: "paste",
    directives: [
      "Keep the author's voice style and word choice",
      "Do not formalize modernize or polish the author's phrasing unless I ask",
      "Keep the author's sentence rhythm and paragraph breaks",
      "Fix only clear errors unless I ask for more",
      "If a change would alter the author's voice ask first"
    ],
    help: [
      "Use this when suggested edits start sounding like the AI instead of the author.",
      "This keeps the manuscript sounding like the person who wrote it.",
      "For a whole editing session, the Manuscript Editing mode includes this."
    ],
    modifiedBy: "Art Malin",
    collapsible: true
  },
{
    id: "Single line examples",
    tier: 1,
    sortOrder: 20,
    topics: ["favorites", "quick-switches", "instructions", "scope", "writing", "programming/html"],
    title: "Single line examples",
    tooltip: "Quick one-line controls with topic filters and an All view.",
    directivesType: "paste",
    directiveDisplay: "topic-filtered",
    directiveItems: [
      { text: "Change only what I ask and leave everything else exactly as it is", topic: "Scope", sortOrder: 5 },
      { text: "For this answer only", topic: "Scope", sortOrder: 10 },
      { text: "In this file only", topic: "Scope", sortOrder: 20 },
      { text: "From now on unless I say otherwise", topic: "Scope", sortOrder: 30 },
      { text: "When I say this term use this exact meaning", topic: "Meaning", sortOrder: 10 },
      { text: "Treat these terms as the same if I say so", topic: "Meaning", sortOrder: 20 },
      { text: "Use the literal meaning", topic: "Meaning", sortOrder: 30 },
      { text: "Treat this as a clean session", topic: "Session", sortOrder: 10 },
      { text: "Use only uploaded files as the source of truth", topic: "Source", sortOrder: 10 },
      { text: "Propose only do not apply", topic: "Execution", sortOrder: 10 },
      { text: "Stop and ask if unclear", topic: "Execution", sortOrder: 20 },
      { text: "Turn this chat into a clean handoff for a new chat", topic: "Workflow", sortOrder: 10 },
      { text: "Use American English unless I say otherwise", topic: "Output", sortOrder: 5 },
      { text: "Smallest correct answer only", topic: "Output", sortOrder: 10 }
    ],
    help: [
      "Use this when you want a very small control line for one specific behavior change.",
      "This helps when you need a quick switch without pasting a full directive block."
    ],
    modifiedBy: "Art Malin",
    collapsible: true
  },
{
    id: "Edit level",
    tier: 1,
    sortOrder: 25,
    topics: ["favorites", "behavior", "writing", "scope"],
    title: "Edit level",
    tooltip: "Name the kind of edit and keep the AI at that level.",
    directivesType: "paste",
    directives: [
      "Use only the edit level I name",
      "Proofread means fix spelling grammar and punctuation only",
      "Line edit means improve clarity and flow within sentences and reword awkward sentences without changing meaning",
      "Developmental edit means comment on structure plot pacing and characters without rewriting",
      "Do not go beyond the level I name",
      "If I did not name a level ask which one"
    ],
    help: [
      "Use this when a simple typo check keeps turning into a rewrite.",
      "This tells the AI exactly how deep to go before it touches anything.",
      "For a whole editing session, the Manuscript Editing mode includes this."
    ],
    modifiedBy: "Art Malin",
    collapsible: true
  },
{
    id: "Stay focused on task",
    tier: 1,
    sortOrder: 30,
    topics: ["favorites", "behavior", "scope", "workflow"],
    title: "Stay focused on task",
    tooltip: "Keep the work on the current task until it is actually done.",
    directivesType: "paste",
    directives: [
      "Keep me on the current task until it is complete.",
      "Watch for scope drift. If I drift, say so plainly, park the distracting item, and pull me back to the current task.",
      "Do not move to the next task until I confirm the current task is complete.",
      "If I try to switch tasks early, require my confirmation before switching or running tasks in parallel.",
      "Apply the same rules to your own responses: stay on the current task, do not branch, and do not introduce side tasks unless clearly necessary.",
      "Do not reorder tasks unless I explicitly ask.",
      "If I ask for a summary or to move this work to a new chat, include: current task, task status, next step, and parking lot.",
      "Occasionally show: current task, one next step, and parking lot."
    ],
    help: [
      "Use this when the conversation keeps wandering into side quests before the real task is finished.",
      "This helps lock onto one task at a time and keep both sides from drifting."
    ],
    modifiedBy: "Art Malin",
    collapsible: true
  },
{
    id: "Continue in new chat (thorough)",
    tier: 1,
    sortOrder: 50,
    topics: ["favorites", "quick-switches", "writing"],
    title: "Continue in new chat (thorough)",
    tooltip: "Create a complete current-state handoff that lets a new chat continue without repeating finished work.",
    directivesType: "paste",
    directives: [
      "Create a thorough, self-contained handoff for continuing this work in a new chat.",
      "Do not continue or execute the current task. Produce only the handoff.",
      "Review the entire conversation and all available attachments before writing it. Capture the current authoritative state so the new chat does not repeat completed work, revive superseded decisions, or drift from the task.",
      "Include:",
      "Primary goal and intended final outcome.",
      "Current active task and its exact status.",
      "A concise status report.",
      "The single recommended next action.",
      "Remaining to-do items in priority order.",
      "Parked items, clearly separated from active work.",
      "Completed actions that must not be repeated.",
      "Final decisions and the reasoning still relevant to those decisions.",
      "User approvals, confirmations, and rejected approaches.",
      "Failed attempts, known mistakes, and unresolved risks only when they help prevent recurrence.",
      "Current versions, filenames, canonical names, paths, URLs, identifiers, settings, and other exact values needed to continue.",
      "Inputs received and outputs created, including their purpose and validation status.",
      "Attachments or artifacts the new chat will need, clearly identifying which must be reattached.",
      "Applicable special directives, operating rules, formatting requirements, preservation rules, scope limits, validation requirements, and stop conditions.",
      "Relevant preferences or memories I explicitly provided.",
      "Anything I specifically requested be included in a handoff.",
      "Open questions, blockers, dependencies, and assumptions that still require confirmation.",
      "Any important distinction between confirmed fact, working assumption, and recommendation.",
      "Use only the latest authoritative information. Omit superseded history unless a short warning is necessary to prevent the same mistake. Do not invent missing details or claim that unfinished work is complete.",
      "Make the handoff stand alone. Do not rely on links to this conversation or phrases such as 'see above,' 'as discussed,' or 'continue from the previous message.'",
      "Use this structure:",
      "1. Handoff Purpose",
      "2. Primary Goal",
      "3. Current Status Report",
      "4. Active Task",
      "5. Completed and Confirmed",
      "6. Decisions and Relevant Reasoning",
      "7. Required Files and Artifacts",
      "8. Directives and Constraints",
      "9. Remaining To-Do",
      "10. Parked Items",
      "11. Risks, Blockers, and Open Questions",
      "12. Exact Next Action",
      "13. New-Chat Continuation Instructions",
      "End with explicit instructions telling the new chat to:",
      "Treat the handoff as the current source of truth.",
      "Maintain one active task.",
      "Start from the stated next action.",
      "Not repeat completed work.",
      "Not change scope, assumptions, or confirmed decisions without approval.",
      "Stop and ask if a required attachment or critical detail is missing."
    ],
    help: [
      "Use this when a long chat has become slow, error-prone, or distracted by obsolete context.",
      "This creates a complete continuation package so the new chat can resume without replaying completed work."
    ],
    modifiedBy: "Art Malin",
    collapsible: true
  },
{
    id: "Set default personality and behavior",
    tier: 1,
    sortOrder: 70,
    topics: ["behavior", "instructions"],
    title: "Set default personality and behavior",
    tooltip: "Have any AI tell you how to set its own default style and instructions.",
    directivesType: "paste",
    directives: [
      "Tell me how to set your default personality tone and custom instructions so they apply to all my new chats",
      "Give the exact current menu steps for web desktop and mobile",
      "Say which settings control tone and style which hold my standing instructions and which control memory",
      "If you are not sure the steps are current say so"
    ],
    help: [
      "Use this in any AI app such as Claude ChatGPT or Grok to find where its long-term defaults are set.",
      "Menus change often so having the AI describe its own current steps beats a fixed list."
    ],
    modifiedBy: "Art Malin",
    collapsible: true
  },
{
    id: "Brainstorm First",
    tier: 1,
    sortOrder: 80,
    topics: ["behavior", "quick-switches", "review"],
    title: "Brainstorm First",
    tooltip: "Generate ideas first and judge them later.",
    directivesType: "paste",
    directives: [
      "We are brainstorming only",
      "Generate ideas quickly",
      "Do not judge or rank ideas yet",
      "When I say evaluate rank the options",
      "Then pick the best one"
    ],
    help: [
      "Use this when you want a bunch of ideas first without stopping to judge them yet.",
      "This helps separate idea generation from evaluation so brainstorming stays fast."
    ],
    modifiedBy: "Art Malin",
    collapsible: true
  },
{
    id: "Directions first",
    tier: 1,
    sortOrder: 90,
    topics: ["instructions", "quick-switches"],
    title: "Directions first",
    tooltip: "Give only the directions first instead of doing the task.",
    directivesType: "paste",
    directives: [
      "If I start with Prompts Only, Directives Only, or Instructions Only, do not do the task. Return only paste-ready directions.",
      "If I say Go, Proceed, or Do it, run the last directions using the current context.",
      "If I say Then execute, first write the directions, then run them using the current context.",
      "Before executing, create an internal checklist and do a final compliance pass.",
      "If the target is unclear, stop and ask."
    ],
    help: [
      "Use this when you want the AI to write the directions first instead of doing the job right away.",
      "This helps when you want to review or edit the directions before anything is executed.",
      "The Prompt Mode and Task Focus mode includes these triggers."
    ],
    modifiedBy: "Art Malin",
    collapsible: true
  },
{
    id: "Copy the Format",
    tier: 1,
    sortOrder: 120,
    topics: ["instructions", "writing", "programming/html"],
    title: "Copy the Format",
    tooltip: "Reuse the layout without reusing the content.",
    directivesType: "paste",
    directives: [
      "Use the source only for structure and format",
      "Do not reuse the original text",
      "Do not reuse the original data",
      "Write new content in the same format"
    ],
    help: [
      "Use this when you want to copy the shape of something but not its actual content.",
      "This helps preserve the format while making the new result fully original."
    ],
    modifiedBy: "Art Malin",
    collapsible: true
  },
{
    id: "Show my edits",
    tier: 2,
    sortOrder: 45,
    topics: ["writing", "review"],
    title: "Show my edits",
    tooltip: "See every change marked up in place and approve before it's final.",
    directivesType: "paste",
    directives: [
      "Show the revised text with deletions ~~struck through~~ and additions in **bold**",
      "Below that list each change numbered with a short reason",
      "Do not finalize until I approve",
      "After I approve return the clean final text with only the approved changes"
    ],
    help: [
      "Use this whenever you give the AI text to rewrite or correct.",
      "You see exactly what changed, like Track Changes in Word, before anything is final.",
      "For a whole editing session, the Manuscript Editing mode includes this."
    ],
    modifiedBy: "Art Malin",
    collapsible: true
  },
{
    id: "Just answer the question",
    tier: 2,
    sortOrder: 100,
    topics: ["behavior", "writing"],
    title: "Just answer the question",
    tooltip: "Answer directly without extra padding.",
    directivesType: "paste",
    directives: [
      "Answer the question directly",
      "Do not add extras unless they clearly help",
      "Do not add explanation unless I ask for it or it is necessary"
    ],
    help: [
      "Use this when the AI keeps adding too much explanation around a simple question.",
      "This helps get a direct answer with less padding."
    ],
    modifiedBy: "Art Malin",
    collapsible: true
  },
{
    id: "Exact Output Only",
    tier: 2,
    sortOrder: 130,
    topics: ["behavior", "writing", "programming/html"],
    title: "Exact Output Only",
    tooltip: "Stick to the exact format requested.",
    directivesType: "paste",
    directives: [
      "Follow the requested format exactly",
      "Do not add commentary outside that format",
      "If the instructions conflict stop and ask"
    ],
    help: [
      "Use this when the shape of the output matters and extra commentary would be a problem.",
      "This helps keep the reply inside the exact format you asked for."
    ],
    modifiedBy: "Art Malin",
    collapsible: true
  },
{
    id: "Don't guess",
    tier: 3,
    sortOrder: 40,
    topics: ["favorites", "scope", "review", "programming/html"],
    title: "Don't guess",
    tooltip: "Stop and clarify the fuzzy parts instead of guessing.",
    directivesType: "paste",
    directives: [
      "If anything is unclear ask targeted questions",
      "Do not guess missing details"
    ],
    help: [
      "Use this when missing details could cause the wrong answer or wasted effort.",
      "This helps force clarification instead of guessing."
    ],
    modifiedBy: "Art Malin",
    collapsible: true
  },
{
    id: "Check My Thinking",
    tier: 3,
    sortOrder: 60,
    topics: ["review", "risk", "programming/html"],
    title: "Check My Thinking",
    tooltip: "Look for flaws, risks, and weak assumptions.",
    directivesType: "paste",
    directives: [
      "Point out flaws",
      "Point out risks",
      "Point out weak assumptions",
      "Call out hidden gotchas",
      "Give your opinion when it adds value",
      "Suggest alternatives only if clearly better",
      "Be direct and honest",
      "Do not rewrite unless I ask"
    ],
    help: [
      "Use this when you want your reasoning checked before you change the wording or structure.",
      "This helps surface bad logic weak assumptions and risks without turning into a rewrite."
    ],
    modifiedBy: "Art Malin",
    collapsible: true
  },
{
    id: "Consistency check",
    tier: 3,
    sortOrder: 65,
    topics: ["review", "writing"],
    title: "Consistency check",
    tooltip: "Find inconsistencies across the manuscript without changing the text.",
    directivesType: "paste",
    directives: [
      "Check the manuscript for consistency",
      "Look at names spellings dates timeline tense and point of view",
      "Report each issue with its location",
      "Do not change the text"
    ],
    help: [
      "Use this after a draft is done or after big edits to catch things that no longer line up.",
      "This finds the problems and leaves the fixing to you."
    ],
    modifiedBy: "Art Malin",
    collapsible: true
  },
{
    id: "Say the Goal First",
    tier: 3,
    sortOrder: 110,
    topics: ["instructions", "writing"],
    title: "Say the Goal First",
    tooltip: "State the goal first so the request stays pointed the right way.",
    directivesType: "list",
    directives: [
      "State the goal first",
      "Then give the request",
      "Include only the context that changes the answer"
    ],
    help: [
      "Use this when a request is getting muddy and the main goal is easy to lose.",
      "This helps put the target first so the rest of the request stays focused."
    ],
    modifiedBy: "Art Malin",
    collapsible: true
  },
{
    id: "Directives vs. Prompts Definition",
    tier: 3,
    sortOrder: 140,
    topics: ["instructions", "writing"],
    title: "Directives vs. Prompts Definition",
    tooltip: "Shows what a directive is versus a prompt and how to paste each.",
    directivesType: "list",
    directives: [
      "A PROMPT is text you paste into a new chat to get a result",
      "A DIRECTIVE is text you paste into the current chat to change behavior",
      "Example DIRECTIVE Just answer the question",
      "Example PROMPT Rewrite this email to sound clear and professional"
    ],
    help: [
      "Use this when someone is mixing up a new-chat prompt with an in-chat directive.",
      "This helps explain the difference in plain terms with examples."
    ],
    modifiedBy: "Art Malin",
    collapsible: true
  }
];
