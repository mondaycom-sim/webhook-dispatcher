import OpenAI from 'openai';

const openai = new OpenAI();

export async function handler(event: any) {
  const classification = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: `Classify webhook: ${JSON.stringify(event)}` }],
  });
  return { statusCode: 200, body: classification.choices[0].message.content };
}
