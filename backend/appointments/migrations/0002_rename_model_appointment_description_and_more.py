# Generated by Django 4.2 on 2023-04-20 03:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appointments', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appointment',
            old_name='model',
            new_name='description',
        ),
        migrations.RenameField(
            model_name='appointment',
            old_name='make',
            new_name='name',
        ),
        migrations.RemoveField(
            model_name='appointment',
            name='year',
        ),
        migrations.AddField(
            model_name='appointment',
            name='date',
            field=models.DateField(default=1),
            preserve_default=False,
        ),
    ]
