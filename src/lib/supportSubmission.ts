export interface SupportPetSelection {
  name: string;
  quantity: number;
}

export interface SupportFormSubmission {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  postalCode: string;
  ageRanges: string[];
  optIn: boolean;
  pickupOthers?: string;
  householdCount?: number;
  dietaryPrefs: string[];
  dietaryNotes?: string;
  hygienePrefs: string[];
  hygieneNeeds?: string;
  pets: SupportPetSelection[];
  petDetails?: string;
  additionalInfo?: string;
  confirmations: string[];
  contactTimezone?: string;
}

interface BrevoContactPayload {
  email: string;
  attributes: Record<string, string | number | boolean>;
  updateEnabled: boolean;
  listIds?: number[];
}

function cleanText(value?: string | null) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

function cleanList(values: string[]) {
  return values.map((value) => value.trim()).filter(Boolean);
}

function buildPetSummary(pets: SupportPetSelection[]) {
  return pets
    .filter((pet) => pet.quantity > 0)
    .map((pet) => `${pet.name}: ${pet.quantity}`)
    .join(", ");
}

function parsePostalCode(postalCode: string) {
  const compact = postalCode.replace(/\s+/g, "");
  return /^\d+$/.test(compact) ? Number(compact) : undefined;
}

export function buildBrevoPayload(
  submission: SupportFormSubmission,
  listId?: number,
): BrevoContactPayload {
  const ageRanges = cleanList(submission.ageRanges);
  const dietaryPrefs = cleanList(submission.dietaryPrefs);
  const hygienePrefs = cleanList(submission.hygienePrefs);
  const confirmations = cleanList(submission.confirmations);
  const petSummary = buildPetSummary(submission.pets);
  const petCount = submission.pets.reduce((total, pet) => total + Math.max(0, pet.quantity), 0);
  const numericPostalCode = parsePostalCode(submission.postalCode);

  const additionalInfoParts = [
    cleanText(submission.additionalInfo),
    numericPostalCode === undefined ? `Postal code: ${submission.postalCode}` : undefined,
  ].filter(Boolean);

  const attributes: Record<string, string | number | boolean> = {
    FIRSTNAME: submission.firstName.trim(),
    LASTNAME: submission.lastName.trim(),
    OPT_IN: submission.optIn,
    CONTACT_TIMEZONE: cleanText(submission.contactTimezone) ?? "America/Toronto",
  };

  const phone = cleanText(submission.phone);
  if (phone) attributes.SMS = phone;
  if (numericPostalCode !== undefined) attributes.POSTAL_CODE = numericPostalCode;
  if (ageRanges.length > 0) attributes.AGE_RANGES = ageRanges.join(", ");
  if (cleanText(submission.pickupOthers)) attributes.PICKUP_OTHERS = submission.pickupOthers!.trim();
  if (typeof submission.householdCount === "number" && !Number.isNaN(submission.householdCount)) {
    attributes.HOUSEHOLD_COUNT = submission.householdCount;
  }
  if (dietaryPrefs.length > 0) attributes.DIETARY_PREFS = dietaryPrefs.join(", ");
  if (cleanText(submission.dietaryNotes)) attributes.DIETARY_NOTES = submission.dietaryNotes!.trim();
  if (hygienePrefs.length > 0) attributes.HYGIENE_PREFS = hygienePrefs.join(", ");
  if (cleanText(submission.hygieneNeeds)) attributes.HYGIENE_NOTES = submission.hygieneNeeds!.trim();
  if (petCount > 0) attributes.PET_COUNT = petCount;
  if (submission.pets.length > 0) attributes.PET_INFO = submission.pets.map((pet) => pet.name).join(", ");

  const petDetails = [cleanText(submission.petDetails), petSummary].filter(Boolean).join(" | ");
  if (petDetails) attributes.PET_DETAILS = petDetails;

  // CONFIRM_ACK is true only if all 4 acknowledgment checkboxes are selected
  attributes.CONFIRM_ACK = confirmations.length >= 4;

  if (additionalInfoParts.length > 0) attributes.ADDITIONAL_INFO = additionalInfoParts.join(" | ");

  const payload: BrevoContactPayload = {
    email: submission.email.trim(),
    attributes,
    updateEnabled: true,
  };

  if (typeof listId === "number" && Number.isInteger(listId)) {
    payload.listIds = [listId];
  }

  return payload;
}
