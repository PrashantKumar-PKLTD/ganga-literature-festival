export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpqeqyyj";

export async function submitToFormspree(event, onSuccess) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Form submission failed");
  }

  form.reset();
  onSuccess?.();
}
