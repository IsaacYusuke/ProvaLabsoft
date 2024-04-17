from django.db import models

class Stadium(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Section(models.Model):
    stadium = models.ForeignKey(Stadium, on_delete=models.CASCADE, related_name='sections')
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.name} - {self.stadium.name}"

class Row(models.Model):
    section = models.ForeignKey(Section, on_delete=models.CASCADE, related_name='rows')
    row_number = models.IntegerField()

    def __str__(self):
        return f"Row {self.row_number} in {self.section}"

class Seat(models.Model):
    row = models.ForeignKey(Row, on_delete=models.CASCADE, related_name='seats')
    seat_number = models.IntegerField()
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return f"Seat {self.seat_number} - Row {self.row.row_number} - {self.row.section}"

    class Meta:
        unique_together = ('row', 'seat_number')  
