from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver
# Create your models here.


class Order(models.Model):
    objects = None

    photo = models.ImageField(upload_to='uploads/images',
                              help_text="Введите фото",
                              verbose_name="Фото товара",
                              null=False, blank=False)  

    order_number = models.CharField(max_length=100, verbose_name='Номер заказа', null=False, blank=False)    
    client = models.CharField(max_length=100, verbose_name='Клиент', null=False, blank=False)
    name = models.CharField(max_length=100, help_text="Введите товар", verbose_name="Товар", null=False, blank=False)
    CATEGORY_CHOICES = [
        ('Процессоры', 'Процессоры'),
        ('Материнские платы', 'Материнские платы'),
        ('Видеокарты', 'Видеокарты'),
        ('Оперативная память', 'Оперативная память'),
        ('SSD-диски', 'SSD-диски'),
        ('HDD-диски', 'HDD-диски'),
        ('Блоки питания>', 'Блоки питания'),
    ]
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, verbose_name='Категория', null=True, blank=True)
    date_created = models.DateField(verbose_name='Дата создания')
    ORDER_STATUS_CHOICES = [
        ('Поступил', 'Поступил'),
        ('Выполняется', 'Выполняется'),
        ('Закрыт', 'Закрыт'),
    ]
    status = models.CharField(max_length=50, choices=ORDER_STATUS_CHOICES, verbose_name='Статус')
    completed = models.BooleanField(default=False, verbose_name='Заказ завершен')
    completion_date = models.DateField(null=True, blank=True, verbose_name='Дата завершения')

    def __str__(self):
        return f'{self.order_number} {self.client}'

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'

@receiver(pre_save, sender=Order)
def update_completion_date(sender, instance, **kwargs):
    if instance.completed and not instance.completion_date:
        instance.completion_date = instance.date_created

files = models.FileField(upload_to='uploads/files')